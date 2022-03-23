import React, {PropsWithChildren} from 'react';
import Button from "@mui/material/Button";

type UIButtonProps = {
  type: 'primary' | 'secondary'
}

const UIButton: React.FC<UIButtonProps> = (props: PropsWithChildren<UIButtonProps>) => {

  const {type} = props;

  return (
    <Button variant={type === 'primary' ? 'contained' : 'outlined'}
            color="primary">
      {props.children}
    </Button>
  )
};

export default UIButton;