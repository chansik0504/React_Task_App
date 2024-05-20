import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const listsContainer = style({
    height: 'max-content',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: vars.spacting.listSpacing,
    margin: vars.spacting.listSpacing
})