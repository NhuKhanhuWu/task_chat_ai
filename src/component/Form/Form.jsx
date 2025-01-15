/** @format */

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import { useChat } from "../../context/ChatContext";

function ChatForm() {
  const { addChat } = useChat();

  // Validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().required("Task name is required"),
    description: Yup.string().required("Description is required"),
  });

  // Form submission handler
  const handleSubmit = (values, resetForm) => {
    const newTaskRequest = {
      sender: "user",
      title: values.title,
      description: values.description,
    };

    addChat(newTaskRequest);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
      {() => (
        <Form className="flex flex-col gap-8 mx-auto p-5 bg-white rounded-2xl border-2">
          {/* Title Input */}
          <label className="text-2xl font-bold">
            Task Name:
            <Field
              name="title"
              type="text"
              placeholder="Enter task name"
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-500 font-normal"
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
              as="textarea"
              name="description"
              placeholder="Enter task description"
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-80 font-normal"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 mt-1 text-xl font-medium"
            />
          </label>

          {/* Submit Button */}
          <Button isSubmitBtn={true} type={"primaryBtn"}>
            Generate Draft
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ChatForm;
