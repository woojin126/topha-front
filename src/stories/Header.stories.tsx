import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../components/header/Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
