```
const {
  Card,
  CardContent,
  CardControl,
  CardDrawers,
  CardMessages,
  CardSection
} = require('./src/index.js');

<Card>
  <CardSection>
    <CardContent
      title="Hello World"
      footerMessage="This is a footer message."
    >
      <p>Here is some content.</p>
      <CardMessages
        messages={[
          { type: 'info', content: 'Info Message' },
          { type: 'error', content: 'Error Message' }
        ]}
      />
    </CardContent>
    <CardControl>
      You could put controls here.
    </CardControl>
  </CardSection>
  <CardDrawers
    drawers={[
      {
        id: 'one',
        name: 'One',
        content: <p>One</p>
      },
      {
        id: 'two',
        name: 'Two',
        content: <p>Two</p>
      }
    ]}
  />
</Card>
```
