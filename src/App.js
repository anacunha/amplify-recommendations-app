function App() {
  return (
    <div className="App">
      Navigation bar
      <Flex overflow={'auto'}>
        List of recommendations
        <Flex position={'relative'} overflow={'hidden'} grow={1}>
        Details of recommendation
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
