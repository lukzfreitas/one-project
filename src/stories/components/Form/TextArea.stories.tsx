import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TextArea from '../../../components/Form/TextArea';

export default {
  title: 'Example/TextArea',
  component: TextArea,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const TextAreaComponent = Template.bind({});

TextAreaComponent.args = {
  label: 'Nome',  
};
