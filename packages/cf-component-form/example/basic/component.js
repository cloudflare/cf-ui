const React = require('react');
const {render} = require('react-dom');
const {
  Form,
  FormHeader,
  FormFooter,
  FormFieldset,
  FormLabel
} = require('../../src/index');
const {Flex, FlexItem} = require('cf-component-flex');
const {Button} = require('cf-component-button');
const Input = require('cf-component-input');
const Select = require('cf-component-select');
const Textarea = require('cf-component-textarea');

class Component extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    type: 'suggestion',
    message: ''
  };

  handleFirstNameChange = firstName => {
    this.setState({ firstName });
  };

  handleLastNameChange = lastName => {
    this.setState({ lastName });
  };

  handleTypeChange = type => {
    this.setState({ type });
  };

  handleMessageChange = message => {
    this.setState({ message });
  };

  handleSubmit = () => {
    console.log(JSON.stringify(this.state, null, 2));
    this.setState({
      firstName: '',
      lastName: '',
      type: 'suggestion',
      message: ''
    });
  };

  render() {
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <FormHeader title="Feedback Form"/>

        <FormFieldset legend="Name">
          <Flex spacing="wide">
            <FlexItem>
              <FormLabel>First Name</FormLabel>
              <Input name="firstName" type="text"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}/>
            </FlexItem>

            <FlexItem>
              <FormLabel>Last Name</FormLabel>
              <Input name="lastName" type="text"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}/>
            </FlexItem>
          </Flex>
        </FormFieldset>

        <FormFieldset legend="Type">
          <FormLabel hidden>Type</FormLabel>
          <Select
            options={[
              { value: 'suggestion', label: 'Suggestion' },
              { value: 'problem', label: 'Problem' }
            ]}
            value={this.state.type}
            onChange={this.handleTypeChange}/>
        </FormFieldset>

        <FormFieldset legend="Message">
          <FormLabel hidden>Message</FormLabel>
          <Textarea name="message"
            value={this.state.message}
            onChange={this.handleMessageChange}/>
        </FormFieldset>

        <FormFooter>
          <Button submit type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </FormFooter>
      </Form>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-form--basic')
);
