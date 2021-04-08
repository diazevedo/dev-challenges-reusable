import React from "react";

import Button from "../../components/Button";
import PageWrapper from "../../components/PageWrapper";

import * as Grid from "../../components/Grid";
import Code from "../../components/TextCode";

const Buttons = () => {
  return (
    <PageWrapper title="Buttons">
      <Grid.Row>
        <Grid.Column>
          <Code>{"<Button />"}</Code>
          <Button>Default</Button>
        </Grid.Column>

        <Grid.Column>
          <Code hover>&:hover, &:focus</Code>
          <Button hover>Default</Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Code>{"<Button variant=”outline” />"}</Code>

          <Button variant="outline" color="primary">
            Default
          </Button>
        </Grid.Column>

        <Grid.Column>
          <Code hover>&:hover, &:focus</Code>

          <Button variant="outline" hover color="primary">
            Default
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Code>{"<Button variant=”text” />"}</Code>

          <Button variant="text" color="primary" disabledShadow>
            Default
          </Button>
        </Grid.Column>

        <Grid.Column>
          <Code>&:hover, &:focus</Code>

          <Button variant="text" color="primary" hover disabledShadow>
            Default
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Code>{"<Button disabledShadow />"}</Code>

          <Button disabledShadow color="primary">
            Default
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Code>{"<Button disabled />"}</Code>

          <Button disabled disabledShadow>
            Disabled
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Code>{"<Button variant=”text” disabled />"}</Code>

          <Button variant="text" disabled disabledShadow color="primary">
            Disabled
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Code>{"<Button startIcon=”local_grocery_store” />"}</Code>

          <Button startIcon="local_grocery_store" color="primary">
            Default
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Code>{"<Button endIcon=”local_grocery_store” />"}</Code>

          <Button endIcon="local_grocery_store" color="primary">
            Default
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Code>{"<Button  size=”sm” />"}</Code>

          <Button color="primary" size="sm">
            Default
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Code>{"<Button size=”md” />"}</Code>

          <Button color="primary" size="md">
            Default
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Code>{"<Button size=”lg”  />"}</Code>

          <Button color="primary" size="lg">
            Default
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Code>{"<Button  color=”default” />"}</Code>
          <Button color="default">Default</Button>
        </Grid.Column>

        <Grid.Column>
          <Code>{"<Button  color=”primary” />"}</Code>
          <Button color="primary">Primary</Button>
        </Grid.Column>

        <Grid.Column>
          <Code>{"<Button color=”secondary” />"}</Code>
          <Button color="secondary">Secondary</Button>
        </Grid.Column>

        <Grid.Column>
          <Code>{"<Button color=”danger”  />"}</Code>
          <Button color="danger">Danger</Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column style={{ marginLeft: "0" }}>
          <Code style={{ width: "100%" }}>{"<Button  color=”default” />"}</Code>
          <Button color="default">Default</Button>
        </Grid.Column>

        <Grid.Column>
          <Button color="primary">Primary</Button>
        </Grid.Column>

        <Grid.Column>
          <Button color="secondary">Secondary</Button>
        </Grid.Column>

        <Grid.Column>
          <Button color="danger">Danger</Button>
        </Grid.Column>
      </Grid.Row>
    </PageWrapper>
  );
};

export default Buttons;
