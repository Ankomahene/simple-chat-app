import {
  messagesReducer,
  addMessage,
  removeMessage,
} from "../store/messagesSlice";

describe("Messages Slice", () => {
  it("should return the initial state", () => {
    expect(messagesReducer(undefined, { type: undefined })).toEqual([]);
  });

  it("should add message to empty state when addMessage action is invoked", () => {
    const newMessage = {
      id: "testId",
      message: "Some test message",
      userId: "test-user-id",
      userName: "John Doe",
    };

    const action = addMessage(newMessage);
    const reducer = messagesReducer([], action);

    expect(reducer).toEqual([newMessage]);
    expect(reducer.length).toBe(1);
  });

  it("should add new message to existing messages list when addMessage action is invoked", () => {
    const mockPreviousState = [
      {
        id: "testId-1",
        message: "Some test message",
        userId: "123",
        userName: "Peter",
      },
    ];

    const newUser = {
      id: "testId-2",
      message: "Some new message",
      userId: "567",
      userName: "John Doe",
    };

    const action = addMessage(newUser);
    const reducer = messagesReducer(mockPreviousState, action);

    expect(reducer).toEqual([...mockPreviousState, newUser]);
    expect(reducer.length).toBe(2);
  });

  it("should remove message from list when removeMessage action is invoked", () => {
    const mockUsersState = [
      {
        id: "testId-1",
        message: "Some test message",
        userId: "123",
        userName: "Peter",
      },
      {
        id: "testId-2",
        message: "Some new message",
        userId: "567",
        userName: "John Doe",
      },
    ];

    const reducer = messagesReducer(mockUsersState, removeMessage("testId-2"));

    expect(reducer).toEqual([mockUsersState[0]]);
    expect(reducer.length).toBe(1);
  });
});
