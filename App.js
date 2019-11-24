import React from 'react';
import{Image, Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Right } from 'native-base';


export default class App extends React.Component {

  render(){
    
  return (
    <Container>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} />
            <Body>
              <Text>Matt Hardy</Text>
              <Text style={{color:"#616C6F"}} note>Paris</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://images.pexels.com/photos/3147460/pexels-photo-3147460.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text> 62 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>10 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>5h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} />
            <Body>
              <Text>Julio Nery</Text>
              <Text style={{color:"#616C6F"}} note>Ankara,Turkey</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://images.pexels.com/photos/1687143/pexels-photo-1687143.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text> 182 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text> 12 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>18h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
    
  </Container>
  );
}
}


