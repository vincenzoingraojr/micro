# @micro-text/editor

This is the plugin architecture built upon Draft.js. I use this package to add more plugins to the Micro editor (the editor the users will use for micro-blogging on my social network).

```jsx
const plugins = [linkifyPlugin, mentionPlugin];

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

Thanks to this package the users can add links to the editor and mention other users.