import React from 'react';
import { CardBuilder } from 'cf-builder-card';
import { Table, TableBody, TableRow, TableCell } from 'cf-component-table';
import { Button as ButtonUnstyled, ButtonTheme } from 'cf-component-button';
import { applyTheme } from 'cf-style-container';

const Button = applyTheme(ButtonUnstyled, ButtonTheme);
const EXAMPLE_CARD = 'EXAMPLE_CARD';

const MyButton = (
  <Button type="default" onClick={() => console.log('Button clicked!')}>
    Click me!
  </Button>
);

const BuilderCard = () => (
  <CardBuilder
    cardName={EXAMPLE_CARD}
    title="This is a Card"
    description="This is the description of a card."
    control={MyButton}
    table={
      <Table striped>
        <TableBody>
          <TableRow>
            <TableCell>One</TableCell>
            <TableCell>Two</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Three</TableCell>
            <TableCell>Four</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    }
    drawers={[
      {
        id: 'api',
        name: 'API',
        content: 'API Content'
      },
      {
        id: 'help',
        name: 'Help',
        content: 'Help Content'
      }
    ]}
  />
);

export default BuilderCard;
