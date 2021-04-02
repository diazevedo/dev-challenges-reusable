import React from "react";
import * as Styled from "./styles";

import Button from "../../components/Button";
import PageWrapper from "../../components/PageWrapper";

const Buttons = () => {
  return (
    <PageWrapper title="Buttons">
      <Styled.Row>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button />"}</Styled.Code>
          </p>
          <Button>Default</Button>
        </Styled.Column>

        <Styled.Column>
          <p>
            <Styled.HoverCode>&:hover, &:focus</Styled.HoverCode>
          </p>
          <Button hover>Default</Button>
        </Styled.Column>
      </Styled.Row>

      <Styled.Row>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button variant=”outline” />"}</Styled.Code>
          </p>
          <Button variant="outline" color="primary">
            Default
          </Button>
        </Styled.Column>

        <Styled.Column>
          <p>
            <Styled.HoverCode>&:hover, &:focus</Styled.HoverCode>
          </p>
          <Button variant="outline" hover color="primary">
            Default
          </Button>
        </Styled.Column>
      </Styled.Row>

      <Styled.Row>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button variant=”text” />"}</Styled.Code>
          </p>
          <Button variant="text" color="primary" disabledShadow>
            Default
          </Button>
        </Styled.Column>

        <Styled.Column>
          <p>
            <Styled.HoverCode>&:hover, &:focus</Styled.HoverCode>
          </p>
          <Button variant="text" color="primary" hover disabledShadow>
            Default
          </Button>
        </Styled.Column>
      </Styled.Row>

      <Styled.Row>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button disabledShadow />"}</Styled.Code>
          </p>
          <Button disabledShadow color="primary">
            Default
          </Button>
        </Styled.Column>
      </Styled.Row>

      <Styled.Row>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button disabled />"}</Styled.Code>
          </p>
          <Button disabled disabledShadow>
            Disabled
          </Button>
        </Styled.Column>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button variant=”text” disabled />"}</Styled.Code>
          </p>
          <Button variant="text" disabled disabledShadow color="primary">
            Disabled
          </Button>
        </Styled.Column>
      </Styled.Row>

      <Styled.Row>
        <Styled.Column>
          <p>
            <Styled.Code>
              {"<Button startIcon=”local_grocery_store” />"}
            </Styled.Code>
          </p>
          <Button startIcon="local_grocery_store" color="primary">
            Default
          </Button>
        </Styled.Column>
        <Styled.Column>
          <p>
            <Styled.Code>
              {"<Button endIcon=”local_grocery_store” />"}
            </Styled.Code>
          </p>
          <Button endIcon="local_grocery_store" color="primary">
            Default
          </Button>
        </Styled.Column>
      </Styled.Row>

      <Styled.Row>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button  size=”sm” />"}</Styled.Code>
          </p>
          <Button color="primary" size="sm">
            Default
          </Button>
        </Styled.Column>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button size=”md” />"}</Styled.Code>
          </p>
          <Button color="primary" size="md">
            Default
          </Button>
        </Styled.Column>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button size=”lg”  />"}</Styled.Code>
          </p>
          <Button color="primary" size="lg">
            Default
          </Button>
        </Styled.Column>
      </Styled.Row>

      <Styled.Row>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button  color=”default” />"}</Styled.Code>
          </p>
          <Button color="default">Default</Button>
        </Styled.Column>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button  color=”primary” />"}</Styled.Code>
          </p>
          <Button color="primary">Primary</Button>
        </Styled.Column>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button color=”secondary” />"}</Styled.Code>
          </p>
          <Button color="secondary">Secondary</Button>
        </Styled.Column>
        <Styled.Column>
          <p>
            <Styled.Code>{"<Button color=”danger”  />"}</Styled.Code>
          </p>
          <Button color="danger">Danger</Button>
        </Styled.Column>
      </Styled.Row>

      <Styled.Row>
        <p style={{ width: "100%" }}>
          <Styled.Code>{"<Button  color=”default” />"}</Styled.Code>
        </p>
        <Styled.Column style={{ marginLeft: "0" }}>
          <Button color="default">Default</Button>
        </Styled.Column>
        <Styled.Column>
          <Button color="primary">Primary</Button>
        </Styled.Column>
        <Styled.Column>
          <Button color="secondary">Secondary</Button>
        </Styled.Column>
        <Styled.Column>
          <Button color="danger">Danger</Button>
        </Styled.Column>
      </Styled.Row>
    </PageWrapper>
  );
};

export default Buttons;
