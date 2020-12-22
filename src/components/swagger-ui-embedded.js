import React, { useEffect, useState } from 'react';
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import './swagger-ui-embedded.scss';

export const SwaggerUIEmbedded = () => {
  useEffect(() => {
    SwaggerUI({
      dom_id: '#swagger-ui-embedded',
      url: 'https://api.codersrank.io/v2/swagger.yaml',
    });
  }, []);
  return <div id="swagger-ui-embedded" />;
};
