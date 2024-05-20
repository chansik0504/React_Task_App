import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const taskButton = style({
    display: 'flex',
    alignItems: 'center',
    height: 'max-content',
    borderRadius: 4,
    marginTop: vars.spacting.small,
    fontSize: vars.fontSize.T3,
    padding: vars.spacting.medium,
    cursor: 'pointer',
    ":hover": {
        backgroundColor: vars.color.secondaryDarkTextHover
    }
})

export const listButton = style({
    display: 'flex',
    alignItems: 'center',
    height: 'max-content',
    borderRadius: 4,
    minWidth: vars.minWidth.list,
    marginTop: vars.spacting.small,
    color: vars.color.brightText,
    fontSize: vars.fontSize.T3,
    backgroundColor: vars.color.mainFaded,
    paddingTop: vars.spacting.small,
    paddingBottom: vars.spacting.small,
    paddingRight: vars.spacting.big2,
    paddingLeft: vars.spacting.big2,
    cursor: 'pointer',
    ":hover": {
        backgroundColor: vars.color.mainFadedBright
    }
})