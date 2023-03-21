import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Title from '../../../components/Typograph/Title';

export default {
  title: 'Example/Title',
  component: Title,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const InputComponent = Template.bind({});

InputComponent.args = {
  label: 'Nome',  
};
