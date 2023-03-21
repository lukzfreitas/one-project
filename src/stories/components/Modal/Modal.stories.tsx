import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ExampleDialog from '../../../components/Modal/ExampleDialog/ExempleDialog';

export default {
    title: 'Example/Dialog',
    component: ExampleDialog,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof ExampleDialog>;

const Template: ComponentStory<typeof ExampleDialog> = (args) => <ExampleDialog />;

export const DialogComponent = Template.bind({});