import React, { Component } from 'react';
import { Accordion, AccordionItem, BlockQuote, Breadcrumb, BreadcrumbItem, Button, Card, CodeBlock,
  CodeSnippet, DividerList, DividerListItem, Footer, FooterNavContainer, FooterNav, HeadingIcon,
  Image, InlineImages, Link, List, ListItem, ListTree, ListTreeGroup, ListTreeItem, MediaObject,
  MutedHeading, SteppedList, SteppedListItem, Strip, StripRow, StripColumn, Switch, Table }
  from 'vanilla-framework-react-caleb';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'users', label: 'Users', align: 'right' },
  { key: 'units', label: 'Units', align: 'right' },
  { key: 'revenue', label: 'Revenue', align: 'right' },
];

const data = [{
    id: 0, name: 'Grape', users: 8, units: 19, revenue: '$70',
  }, {
    id: 1, name: 'Melon', users: 12, units: 23, revenue: '$99',
  }, {
    id: 2, name: 'Apple', users: 9, units: 17, revenue: '$120',
  }
];

class App extends Component {
  render() {
    return (
      <div style={{ background: '#fff', margin: '0 auto', maxWidth: '1030px', width: '100%', padding: '3rem 1rem' }}>
        <header style={{ textAlign: 'center' }}>
          <h1>Welcome to Vanilla React</h1>
        </header>

        <h2>Accordion</h2>
        <Accordion>
          <AccordionItem title="Title of Item 1">
            <p>
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </AccordionItem>
          <AccordionItem title="Title of Item 2">
            <p>
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </AccordionItem>
          <AccordionItem title="Title of Item 3">
            <p>
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </AccordionItem>
        </Accordion>

        <h2>BlockQuote</h2>
        <BlockQuote
          pull
          quote="Ubuntu is an ancient African word meaning 'humanity to others'. Ubuntu is an ancient African word meaning 'humanity to others'."
          citation="Canonical"
        />

        <h2>Breadcrumbs</h2>
        <Breadcrumb>
          <BreadcrumbItem><a href="#a">Breadcrumb One</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#a">Breadcrumb Two</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#a">Breadcrumb Three</a></BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb Four</BreadcrumbItem>
        </Breadcrumb>

        <h2>Button</h2>
        <Button value="Base button"/>
        <Button neutral value="Neutral button"/>
        <Button positive value="Positive button"/>
        <Button negative value="Negative button"/>
        <Button brand value="Brand button"/>

        <h2>Card</h2>
        <Card
          highlighted
          title='Card title'
          image={{
            src: 'http://placekitten.com/g/64/64',
            alt: 'Placeholder',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Card>

        <h2>CodeBlock</h2>
        <CodeBlock numbered>
          {`this is code sample line 1
              this is code sample line 2
                this is code sample line 3

            this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4
            this is code sample line 5`}
        </CodeBlock>

        <h2>CodeSnippet</h2>
        <CodeSnippet value='sudo apt-get update' />

        <h2>DividerList</h2>
        <DividerList>
          <DividerListItem>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
            necessitatibus cumque commodi velit.
            </p>
          </DividerListItem>
          <DividerListItem>
            <h2>Dolor sit</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
              necessitatibus cumque commodi velit. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quasi, labore at suscipit necessitatibus cumque commodi velit. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Quasi, labore at suscipit necessitatibus cumque
              commodi velit.
            </p>
          </DividerListItem>
          <DividerListItem>
            <h2>Cumque commodi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
              necessitatibus cumque commodi velit.
            </p>
          </DividerListItem>
        </DividerList>

        <h2>Footer</h2>
        <Footer>
          <p>&copy; 2017 Company name and logo are registered trademarks of Company Ltd.</p>
          <FooterNavContainer>
            <FooterNav title="Footer link 1" link="#" />
            <FooterNav title="Footer link 2" link="#" />
            <FooterNav title="Footer link 3" link="#" />
            <FooterNav title="Footer link 4" link="#" />
          </FooterNavContainer>
        </Footer>

        <h2>HeadingIcon</h2>
        <HeadingIcon
          title='Lorem ipsum dolor'
          alt="Lorem ipsum dolor"
          src='https://assets.ubuntu.com/v1/a4d31b28-icon-quote.svg'
        >
          <p>
            Sit amet, consectetur adipisicing elit. Enim excepturi, repudiandae blanditiis odio perferendis voluptatibus dolorum, dicta illum quae ipsa voluptatum, sunt quasi? Nulla reiciendis magnam nostrum aliquam, beatae doloribus.
          </p>
        </HeadingIcon>

        <h2>Image</h2>
        <Image
          bordered
          shadowed
          src='http://placekitten.com/g/300/300'
          alt='cat'
        />

        <h2>InlineImages</h2>
        <InlineImages>
          <Image bordered src="http://placekitten.com/g/200/200" alt="" />
          <Image bordered src="http://placekitten.com/g/400/400" alt="" />
          <Image bordered src="http://placekitten.com/g/300/300" alt="" />
          <Image bordered src="http://placekitten.com/g/500/500" alt="" />
        </InlineImages>

        <h2>Link</h2>
        <Link external soft href='#'>External Link</Link>

        <h2>List</h2>
        <List>
          <ListItem ticked>Lorem</ListItem>
          <ListItem ticked>Ipsum</ListItem>
          <ListItem ticked>Dolor</ListItem>
        </List>

        <h2>ListTree</h2>
        <ListTree>
          <ListTreeGroup name="/folder">
            <ListTreeItem>file</ListTreeItem>
          </ListTreeGroup>
          <ListTreeItem>
            <Link strong href="#a">charm-helpers-sync.yaml</Link>
          </ListTreeItem>
          <ListTreeItem>
            <Link strong href="#a">config.yaml</Link>
          </ListTreeItem>
          <ListTreeGroup name="/files">
            <ListTreeItem>default_rsync</ListTreeItem>
            <ListTreeItem>nagios_plugin.py</ListTreeItem>
            <ListTreeGroup name="/plugins">
              <ListTreeItem>check_mem.pl</ListTreeItem>
            </ListTreeGroup>
            <ListTreeGroup name="/misc">
              <ListTreeGroup name="/cat">
                <ListTreeItem>
                  <Image bordered src="http://placekitten.com/g/300/300" alt="" />
                </ListTreeItem>
              </ListTreeGroup>
            </ListTreeGroup>
          </ListTreeGroup>
        </ListTree>

        <h2>MediaObject</h2>
        <MediaObject
          img={{ src: 'http://placehold.it/72x72', alt: '' }}
          title={{ name: 'Event Title', link: '#' }}
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          metadata={{
            topic: 'CSS frameworks',
            date: '21 - 23 February 2017',
            venue: 'Venue 360',
            location: 'Santa Clara, CA',
          }}
        />

        <h2>MutedHeading</h2>
        <MutedHeading>Muted Heading</MutedHeading>

        <h2>SteppedList</h2>
        <SteppedList>
          <SteppedListItem
            title='First step'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title='Second step'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title='Third step'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title='Last step'
            bullet='99'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
        </SteppedList>

        <h2>Strip</h2>
        <Strip
          deep
          image={{
            src: 'https://assets.ubuntu.com/v1/ebdfffbf-Aubergine_suru_background.png',
            colour: 'dark',
          }}
          style={{ backgroundPosition: '77% 0%' }}
        >
          <StripRow style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
            <StripColumn size={6}>
              <h2>Ubuntu Enterprise Summit</h2>
              <h3>5 &mdash; 6 December 2017</h3>
              <h5>Find out how the world&lsquo;s top companies use Ubuntu to succeed</h5>
              <p>
                <Button positive value="Sign up now" />
              </p>
            </StripColumn>
            <StripColumn size={6}>
              <Image src="https://assets.ubuntu.com/v1/9c1315fb-IOT_Ubuntu_devices_inforgrapic+v3.svg" alt="Ubuntu devices infographic" />
            </StripColumn>
          </StripRow>
        </Strip>

        <h2>Switch</h2>
        <Switch label="Switch" />

        <h2>Table</h2>
        <Table sortable data={data} columns={columns} />

      </div>
    );
  }
}

export default App;
