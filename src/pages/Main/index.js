import React, { Component } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';

class Main extends Component {
  state = {};

  render() {
    return (
      <>
        <Container
          style={{
            paddingTop: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 300,
          }}
        >
          <h1 style={{ color: '#fff', marginTop: 20, fontFamily: 'Ubuntu' }}>
            Movie Now
          </h1>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: 250, margin: 10 }}>
              <Card.Img
                variant="top"
                style={{
                  width: 180,
                  height: 300,
                  alignSelf: 'center',
                  paddingTop: 20,
                  cursor: 'pointer',
                }}
                src="https://sm.ign.com/t/ign_br/screenshot/default/strangerposter3_8gp8.1280.jpg"
              />
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  Some quick example text to build on the card title and make up
                  the bulk of the card`&apos;`s content.
                </Card.Text>
                <Button style={{ width: '100%' }} variant="outline-dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
