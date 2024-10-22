export default () => {
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  // set isMounted to false when we unmount the component
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return;
    // update state
    setIsSending(true);
    // send the actual request
    await API.sendRequest();
    // once the request is sent, update state again
    if (isMounted.current)
      // only update if we are still mounted
      setIsSending(false);
  }, [isSending]); // update the callback if the state changes

  return <input type="button" disabled={isSending} onClick={sendRequest} />;
};
