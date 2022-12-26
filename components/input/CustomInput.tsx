import { forwardRef } from "react";
import { InputProps, InputBase, styled } from "@mui/material";

const CustomInput = (props: InputProps, ref?: React.Ref<HTMLInputElement>) => {
    return (
        <StyledInput
            autoComplete="off"
            inputRef={ref}
            {...props}
        />
    )

}

export default forwardRef(CustomInput)

const StyledInput = styled(InputBase)(() => {
    return {
        border: "2px solid #E6E8EC",
        borderRadius: "12px",
        "& .MuiInputBase-input": {
            padding: "12px 16px",
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "500",
            color: "#777E91",
        },
    }
})
