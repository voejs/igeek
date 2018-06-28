<template><div :class="classes"><slot></slot></div></template>
<style>
  .ant-flex {
    text-align: left;
    display: flex;
    align-items: center;
  }
  .ant-flex-auto {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .ant-flex-hide {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .ant-flex-scroll {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .ant-flex-nowrap {
    flex-wrap: nowrap;
  }
  .ant-flex-wrap {
    flex-wrap: wrap;
  }
  .ant-flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }
  .ant-flex-dir-row {
    flex-direction: row;
  }
  .ant-flex-dir-row-reverse {
    flex-direction: row-reverse;
  }
  .ant-flex-dir-column {
    flex-direction: column;
  }
  .ant-flex-dir-column-reverse {
    flex-direction: column-reverse;
  }
  .ant-flex-align-left {
    justify-content: flex-start;
  }
  .ant-flex-align-right {
    justify-content: flex-end;
  }
  .ant-flex-align-center {
    justify-content: center;
  }
  .ant-flex-align-between {
    justify-content: space-between;
  }
  .ant-flex-align-around {
    justify-content: space-around;
  }
  .ant-flex-valign-top {
    align-items: flex-start;
  }
  .ant-flex-valign-bottom {
    align-items: flex-end;
  }
  .ant-flex-valign-middle {
    align-items: center;
  }
  .ant-flex-valign-stretch {
    align-items: stretch;
  }
  .ant-flex-valign-baseline {
    align-items: baseline;
  }
  .ant-flex-align-content-start {
    align-content: flex-start;
  }
  .ant-flex-align-content-end {
    align-items: flex-end;
  }
  .ant-flex-align-content-center {
    align-items: center;
  }
  .ant-flex-align-content-between {
    align-items: stretch;
  }
  .ant-flex-align-content-around {
    align-items: baseline;
  }
  .ant-flex-align-content-stretch {
    align-items: baseline;
  }
  .ant-flex-span-1 {
    flex: 1;
  }
  .ant-flex-span-2 {
    flex: 2;
  }
  .ant-flex-span-3 {
    flex: 3;
  }
  .ant-flex-span-4 {
    flex: 4;
  }
  .ant-flex-span-5 {
    flex: 5;
  }
  .ant-flex-span-6 {
    flex: 6;
  }
  .ant-flex-span-7 {
    flex: 7;
  }
  .ant-flex-span-8 {
    flex: 8;
  }
  .ant-flex-span-9 {
    flex: 9;
  }
  .ant-flex-span-10 {
    flex: 10;
  }
  .ant-flex-span-11 {
    flex: 11;
  }
  .ant-flex-span-12 {
    flex: 12;
  }
  .ant-flex-span-13 {
    flex: 13;
  }
  .ant-flex-span-14 {
    flex: 14;
  }
  .ant-flex-span-15 {
    flex: 15;
  }
  .ant-flex-span-16 {
    flex: 16;
  }
  .ant-flex-span-17 {
    flex: 17;
  }
  .ant-flex-span-18 {
    flex: 18;
  }
  .ant-flex-span-19 {
    flex: 19;
  }
  .ant-flex-span-20 {
    flex: 20;
  }
  .ant-flex-span-21 {
    flex: 21;
  }
  .ant-flex-span-22 {
    flex: 22;
  }
  .ant-flex-span-23 {
    flex: 23;
  }
  .ant-flex-span-24 {
    flex: 24;
  }
  .ant-flex-item {
    -webkit-box-sizing: border-box;
  }
  .ant-flex-blocked {
    width: 100%;
  }
  .ant-flex-fulled {
    height: 100%;
  }
</style>
<script>
  const directionMaps = ["row", "row-reverse", "column", "column-reverse"];
  const wrapMaps = ["nowrap", "wrap", "wrap-reverse"];
  const alignMaps = ["left", "right", "center", "between", "around"];
  const valignMaps = ["top", "middle", "bottom", "stretch", "baseline"];
  const alignContentMaps = [
    "start",
    "end",
    "center",
    "between",
    "around",
    "stretch"
  ];
  const overflow = ["hide", "scroll", "auto"];
  
  export default {
    name: "flex",
    data() {
      return {
        prefixClassName: "ant-flex"
      };
    },
    props: {
      span: {
        type: Number,
        validator: value => {
          if (!value) return true;
          return value > 0 && value <= 24;
        }
      },
      direction: {
        type: String,
        validator: value => directionMaps.indexOf(value) > -1
      },
      wrap: {
        type: String,
        validator: value => wrapMaps.indexOf(value) > -1
      },
      align: {
        type: String,
        validator: value => alignMaps.indexOf(value) > -1,
        default: 'left'
      },
      valign: {
        type: String,
        validator: value => valignMaps.indexOf(value) > -1,
        default: 'top'
      },
      alignContent: {
        type: String,
        validator: value => alignContentMaps.indexOf(value) > -1
      },
      blocked: Boolean,
      fulled: Boolean,
      overflow: {
        type: String,
        validator: value => {
          if (!value) return true;
          return overflow.indexOf(value) > -1;
        }
      }
    },
    computed: {
      classes() {
        const classes = [];
        
        if (this.span) {
          if (
            this.direction ||
            this.wrap ||
            this.align ||
            this.valign ||
            this.alignContent
          ) {
            classes.push(this.prefixClassName);
          }
          classes.push(
            `${this.prefixClassName}-item`,
            `${this.prefixClassName}-span-${this.span}`
          );
        } else {
          classes.push(this.prefixClassName);
        }
        
        this.direction &&
        classes.push(`${this.prefixClassName}-dir-${this.direction}`);
        this.wrap && classes.push(`${this.prefixClassName}-${this.wrap}`);
        this.align && classes.push(`${this.prefixClassName}-align-${this.align}`);
        this.valign &&
        classes.push(`${this.prefixClassName}-valign-${this.valign}`);
        this.alignContent &&
        classes.push(
          `${this.prefixClassName}-align-content-${this.alignContent}`
        );
        this.blocked && classes.push(`${this.prefixClassName}-blocked`);
        this.fulled && classes.push(`${this.prefixClassName}-fulled`);
        this.overflow && classes.push(`${this.prefixClassName}-${this.overflow}`);
        
        return classes;
      }
    }
  };
</script>