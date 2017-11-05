import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
       <label>{label}</label>
       <textarea className="form-control" {...input} style={{ marginBottom: '5px' }} />
       <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
       </div>
    </div>
  );
};
