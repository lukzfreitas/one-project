import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Select from '../../../components/Form/Select';

export default {
    title: 'Example/Select',
    component: Select,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectComponent = Template.bind({});

SelectComponent.args = {
    label: 'Nome',
    options: [
        { label: 'option1', selected: true, value: 1 },
        { label: 'option2', selected: true, value: 2 },
        { label: 'option3', selected: true, value: 3 },
        { label: 'option4', selected: true, value: 4 },
        { label: 'option5', selected: true, value: 5 }
    ]
};
