/** @format */

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import { useChat } from "../../context/ChatContext";
import useGetDraft from "../../hook/useGetDraft";
import { useEffect, useState } from "react";
import { useLoad } from "../../context/LoadContext";

function ChatForm() {
  const { addChat, setSystemMessage } = useChat();
  const { isLoading, setIsLoading } = useLoad();
  const [newTaskRequest, setTaskRequest] = useState(null);
  const [draft, setDraft] = useState(null);
  const [userRequest, setUserRequest] = useState(null);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().required("Task name is required"),
    description: Yup.string().required("Description is required"),
  });

  // Form submission handler
  function handleSubmit(values, { resetForm }) {
    const taskData = {
      sender: "user",
      title: values.title,
      description: [values.description],
    };

    setTaskRequest(taskData); // to trigger api call
    addChat(taskData); // Add user message
    setUserRequest({
      userTitle: values.title,
      userDescription: values.description,
    }); // save user request

    resetForm();
  }

  // Fetch draft only when `newTaskRequest` changes
  useEffect(() => {
    if (!newTaskRequest) return;

    const fetchDraft = async () => {
      setIsLoading(true); // Set loading to true before API call

      try {
        const response = await useGetDraft(
          newTaskRequest.title,
          newTaskRequest.description
        );
        setDraft({ ...response, ...userRequest });
      } catch (error) {
        console.error("Error fetching draft:", error);
      } finally {
        setIsLoading(false); // Set loading to false after API call
      }
    };

    fetchDraft();
  }, [newTaskRequest]);

  // Add draft to chat only when it is set
  useEffect(() => {
    if (draft?.title) addChat(draft);
    else if (draft?.sender === "system") setSystemMessage(draft);
  }, [draft]);

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {/* {() => ( */}
      <Form className="flex flex-col gap-8 mx-auto p-5 bg-white rounded-2xl border-2">
        {/* Title Input */}
        <label className="text-2xl font-bold">
          Task Name:
          <Field
            disabled={isLoading}
            name="title"
            type="text"
            placeholder="Enter task name"
            className={`w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-500 font-normal ${
              isLoading ? "cursor-not-allowed" : ""
            }`}
          />
          <ErrorMessage
            name="title"
            component="div"
            className="text-red-500 mt-1 text-xl font-medium"
          />
        </label>

        {/* Description Input */}
        <label className="text-2xl font-bold">
          Description:
          <Field
            disabled={isLoading}
            as="textarea"
            name="description"
            placeholder="Enter task description"
            className={`w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-80 font-normal ${
              isLoading && "cursor-not-allowed"
            }`}
          />
          <ErrorMessage
            name="description"
            component="div"
            className="text-red-500 mt-1 text-xl font-medium"
          />
        </label>

        {/* Submit Button */}
        <Button
          disabled={isLoading}
          isSubmitBtn={true}
          type={isLoading ? "primaryBtn-disable" : "primaryBtn"}>
          Generate Draft
        </Button>
      </Form>
      {/* )} */}
    </Formik>
  );
}

export default ChatForm;
