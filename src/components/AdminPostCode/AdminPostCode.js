import React, { useState, useMemo } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import Form, { Label, SimpleItem } from 'devextreme-react/form';

import './AdminPostCode.css';

const data = { isAddressRequired: false, Address: '' };

const AdminPostCode = () => {

  let [visible, setVisible] = useState(false);

  const checkBoxOptions = useMemo(() => {
    return {
      text: "Display PostCode",
      onValueChanged: (e) => {
        setVisible(e.value);
      }
    }
  }, []);

  const addressOptions = useMemo(() => {
    return {
      placeholder: 'Enter postcode',
      maxLength: 50
    }
  }, []);

  return (

    <div>

      <Form formData={data} width={400}>

        <SimpleItem
          dataField="isAddressRequired"
          editorType="dxCheckBox"
          editorOptions={checkBoxOptions}>
          <Label visible={false} />
        </SimpleItem>

        <SimpleItem
          dataField="Address"
          editorType="dxTextBox"
          editorOptions={addressOptions}
          visible={visible}
        />

      </Form>

    </div>
  );
}


export default AdminPostCode;