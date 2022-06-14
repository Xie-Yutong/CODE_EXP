import React, {Component} from 'react';
import { Content, Header, Title, Icon, Button, Body, Left, Right, Thumbnail, ListItem, Container, Text, NativeBaseProvider } from 'native-base';

export default class CounsellorList extends Component {
    render() {
      return (
        <NativeBaseProvider>
          <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu'></Icon>
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{uri: 'uri here'}}/>
                </Left>
                <Body>
                  <Text>Name</Text>
                  <Text note>Address</Text>
                </Body>
              </ListItem>
            </Content>
          </Container>
        </NativeBaseProvider>
      )
    }
  }