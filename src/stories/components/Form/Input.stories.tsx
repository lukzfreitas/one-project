import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Input from '../../../components/Form/Input';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputComponent = Template.bind({});

InputComponent.args = {
  label: 'Nome',
  placeholder: 'Insira o nome'
};
