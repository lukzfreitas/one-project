import { ComponentStory, ComponentMeta } from '@storybook/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProgressBar from '../../../components/Progress/ProgressBar';

export default {
    title: 'Example/ProgressBar',
    component: ProgressBar,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const ProgressBarComponent = Template.bind({});

ProgressBarComponent.args = {
    valueNow: 90
};
