import React from "react";
import { withTheme } from "@rjsf/core";
import { Theme as MaterialUITheme } from "@rjsf/material-ui";
import { Button } from "@material-ui/core";
import JS4 from "../../../assets/jsonschema/schema-04.json";

const Form = withTheme(MaterialUITheme);

function deleteTitleFromJSONSchema(jsonSchema) {
  return { ...jsonSchema, title: "" };
}

function RJSFButton({ handler, text }) {
  return (
    <Button variant="contained" color="primary" style={{ marginRight: "0.5rem" }} onClick={handler}>
      {text}
    </Button>
  );
}

function RJSF({ formData, jsonSchema, onChange, hideSubmit, hideTitle, onSubmit, onDelete }) {
  const [data, setData] = React.useState(formData);

  React.useEffect(() => {
    onChange?.(data);
  }, [data]);

  console.log("form DTata", data)

  return (
    <Form
      schema={hideTitle ? deleteTitleFromJSONSchema(jsonSchema) : jsonSchema}
      idPrefix={jsonSchema?.title}
      onChange={(e) => setData(e.formData)}
      formData={data}
      liveValidate
      additionalMetaSchemas={[JS4]}
    // noHtml5Validate
    >
      {hideSubmit ? true : <RJSFButton handler={onSubmit} text="Submit" />}
      {hideSubmit ? true : <RJSFButton handler={onDelete} text="Delete" />}
    </Form>
  );
}

export default RJSF;
