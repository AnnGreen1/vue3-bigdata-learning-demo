import { h, provide } from "vue";

const ZRow =  {
  name: "ZRow",
  functional: true,
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    tag: {
      type: Number,
      default: "div",
    },
    className: {
      type: String,
      default: "",
    },
    type: String,
    justify: String,
    align: String,
  },
  setup(props:any, context:any) {
    const { gutter, type, justify, align, tag, className } = props;
    provide("ZRow", gutter);
    return () => [
      h(
        tag,
        {
          class: [
            "z-row",
            type == "flex" ? "z-row-flex" : "",
            justify ? `z-justify-${justify}` : "",
            align ? `z-align-${align}` : "",
            className,
          ],
        },
        context.slots
      ),
    ];
  },
};

export default ZRow;
