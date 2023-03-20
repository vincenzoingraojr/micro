# @micro-text/linkify

This plugin allows the users to add links to their posts (using the Square micro-blogging editor - also known as Micro). Here's an example:

```jsx
const plugins = [linkifyPlugin];

<Editor
    placeholder={placeholder}
    editorState={editorState}
    onChange={(editorState) => {
        setEditorState(editorState);
    }}
    plugins={plugins}
    ref={postEditorRef}
    readOnly={false}
/>
```
