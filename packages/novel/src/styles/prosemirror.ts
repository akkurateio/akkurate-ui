// create style with emotion fox box
import { css } from "@emotion/react"

export const prosemirror = css`
  .ProseMirror .is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }
  .ProseMirror .is-empty::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }

  /* Custom image styles */

  .ProseMirror img {
    transition: filter 0.1s ease-in-out;

    &:hover {
      cursor: pointer;
      filter: brightness(90%);
    }

    &.ProseMirror-selectednode {
      outline: 3px solid #5abbf7;
      filter: brightness(90%);
    }
  }

  /* Custom TODO list checkboxes – shoutout to this awesome tutorial: https://moderncss.dev/pure-css-custom-checkbox-style/ */

  ul[data-type="taskList"] li > label {
    margin-right: 0.2rem;
    user-select: none;
  }

  @media screen and (max-width: 768px) {
    ul[data-type="taskList"] li > label {
      margin-right: 0.5rem;
    }
  }

  ul[data-type="taskList"] li > label input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    margin-right: 0.3rem;
    cursor: pointer;
    width: 1em;
    height: 1em;
    position: relative;
    top: 5px;
    border: 2px solid black;
    display: grid;
    place-content: center;

    &:hover {
      background-color: #f8f9fa;
    }

    &:active {
      background-color: #e9ecef;
    }

    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em;
      transform-origin: center;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  ul[data-type="taskList"] li[data-checked="true"] > div > p {
    color: #a8a29e;
    text-decoration: line-through;
    text-decoration-thickness: 2px;
  }

  .ProseMirror ul[data-type="taskList"] {
    list-style: none;
  }
  .ProseMirror ul[data-type="taskList"] li {
    display: flex;
    flex-direction: row;
    align-items: start;
  }

  .ProseMirror table * p {
    padding: 0px 1px;
    margin: 6px 2px;
  }

  .ProseMirror table * .is-empty::before {
    opacity: 0;
  }

  .ProseMirror:focus {
    outline: none;
  }
  .ProseMirror h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  .ProseMirror a {
    cursor: pointer;
  }
`
