import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SubTitle from '../../../components/Typograph/SubTitle';

export default {
  title: 'Example/SubTitle',
  component: SubTitle,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => <SubTitle {...args} />;

export const SubTitleComponent = Template.bind({});

SubTitleComponent.args = {
  label: 'Nome',  
};
