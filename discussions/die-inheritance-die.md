# Die inheritance die

### Technical Decision

All new code should avoid using inheritance in favor of plain functions.

### TL;DR

Inheritance promises to solve a number of problems by allowing objects/classes
to take on the behavior of the parent object/class. However, in practice this
is the source of a lot of developer confusion and bugs. Instead we should favor
composing functions together.

### Thinking

Either as a result of how prototypal-inheritance works in JavaScript or as a
bad pattern in computer science, it causes a lot of confusion when trying to
follow code paths and when trying to keep logic isolated.

Being able to modify properties on `this` that are implicit dependencies within
class methods, being able to modify and overload methods on sub-classes that
can break other methods in parent classes is horrible.

Plain functions are far superior, the dependencies that are allowed to be
modified are passed in, dependencies not allowed to be modified can't be, and
the output is explicitly defined within the method.

The difference between writing things as classes and functions really aren't
that different.

**Classes**

```js
class Foo {
  method() {
    doSomething();
  }
}

class Bar extends Foo {
  method() {
    doSomethingElse();
    super.method();
  }
}
```

**Functions**

```js
function fooMethod() {
  doSomething();
}

function barMethod() {
  doSomethingElse();
  fooMethod();
}
```

The difference between external dependencies and parameter dependencies isn't
that bad either:

**Classes**

```js
class Foo {
  externalDependency = 3;

  method(passedInDependency) {
    doSomething(this.externalDependency, passedInDependency);
  }
}

class Bar extends Foo {
  method() {
    doSomethingElse();
    super.method(5);
  }
}
```

**Functions**

```js
const externalDependency = 3;

function fooMethod(passedInDependency) {
  doSomething(externalDependency, passedInDependency);
}

function barMethod() {
  doSomethingElse();
  fooMethod(5);
}
```

Until you decide to start doing something bad in classes:

```diff
  class Foo {
    externalDependency = 3;

    method(passedInDependency) {
      doSomething(this.externalDependency, passedInDependency);
    }
  }

  class Bar extends Foo {
    method() {
+     this.externalDependency = 1;
      doSomethingElse();
      super.method(5);
    }
  }
```

Now you're modifying an external dependency that changes the behavior of
`Foo#method` forever. Maybe this is intended, but you haven't expressed that
intent at all.

The next big mistake you can make is modifying the behavior of a method in a
subclass that breaks a method in the parent class.

```js
class Foo {
  method() {
    return doSomething();
  }

  otherMethod() {
    return this.method();
  }
}

class Bar extends Foo {
  method() {
    doSomethingElse();
    super.method();
  }
}

const foo = new Foo();
const bar = new Bar();

foo.otherMethod(); // result of doSomething()
bar.otherMethod(); // undefined
```

Notice what happened here? We modified the behavior of `method()` on `Bar`, but
we never returned a value so we changed the interface unintentionally which
broke `Foo#otherMethod()` when used on `Bar`.

These are just the tip of the iceberg when it comes to the issues that have
come up in our application when using inheritance.

Favor composition of functions over using inheritance.
