import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from '../../../components/Navigation/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default {
  title: 'Example/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarComponent = Template.bind({});

NavbarComponent.args = {
  items: [{ label: 'Home', active: true }, { label: 'Cadastro', active: false }]
};
