export default {
  title: 'Komponenter/Min komponent',
};

type ButtonArgs = {
  content: string;
};

const Template = (args: ButtonArgs) => `<t-button>${args.content}</t-button>`;

export const Example = Template.bind({});
Example.args = {
  content: 'Klikk meg'
} satisfies ButtonArgs;
