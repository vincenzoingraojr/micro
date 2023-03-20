# @micro-text/mention 

This package is crucial for Square: it allows the users to easily communicate by mentioning each other. Here's how I implemented this plugin to the Draft.js editor:

```jsx
const EditorComponent: FunctionComponent<EditorComponentProps> = ({
    placeholder,
}) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const { MentionSuggestions, plugins } = useMemo(() => {
        const mentionPlugin = createMentionPlugin();

        const { MentionSuggestions } = mentionPlugin;

        const plugins = [linkifyPlugin, mentionPlugin];
        return { plugins, MentionSuggestions };
    }, []);
    
    const [open, setOpen] = useState(false);

    const [mentionUsers, setMentionUsers] = useState<MentionData[]>([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_ORIGIN}/users`, {
            method: "POST",
            credentials: "include",
        }).then(async (x) => {
            const { users } = await x.json();
            setMentionUsers(users);
        });
    }, []);

    const mentions: MentionData[] = mentionUsers;
    const [suggestions, setSuggestions] = useState(mentions);

    const onOpenChange = useCallback((_open: boolean) => {
        setOpen(_open);
    }, []);

    const onSearchChange = useCallback(({ value }: { value: string }) => {
        if (value.length > 1) {
            setSuggestions(defaultSuggestionsFilter(value, mentions));
        }
    }, [mentions]);

    return (
        <EditorContainer>
            <Editor
                placeholder={placeholder}
                editorState={editorState}
                onChange={(editorState) => {
                    setEditorState(editorState);
                }}
                plugins={plugins}
                readOnly={false}
            />
            <MentionSuggestions
                open={open}
                onOpenChange={onOpenChange}
                suggestions={suggestions}
                onSearchChange={onSearchChange}
                onAddMention={(event) => {
                    // Here you can decide what appens when you add a mention.
                }}
            />
        </EditorContainer>
    );
};

export default EditorComponent;
```
