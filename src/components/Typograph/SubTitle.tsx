interface SubTitleProps {
    label: string;
  }
  
  const SubTitle = (props: SubTitleProps) => {
    return <div className="h4 text-muted">{props.label}</div>;
  };
  
  export default SubTitle;
  