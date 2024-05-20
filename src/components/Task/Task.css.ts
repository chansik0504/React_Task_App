import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    padding: vars.spacting.medium,
    backgroundColor: vars.color.task,
    borderRadius: 10,
    marginBottom: vars.spacting.big2,
    boxShadow: vars.shadow.basic,
    cursor: 'pointer',
    ":hover": {
        backgroundColor: vars.color.taskHover,
        transform: "scale(1.03)"
    }
})

export const title = style({
    fontSize: vars.fontSize.T4,
    fontWeight: 'bold',
    marginBottom: vars.spacting.small
})

export const description = style({
    fontSize: vars.fontSize.P1
})