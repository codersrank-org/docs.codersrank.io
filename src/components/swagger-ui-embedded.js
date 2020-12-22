import React, { useEffect } from 'react';
import 'swagger-ui/dist/swagger-ui.css';
import './swagger-ui-embedded.scss';

export const SwaggerUIEmbedded = () => {
  useEffect(() => {
    import('swagger-ui').then((module) => {
      const SwaggerUI = module.default;
      SwaggerUI({
        dom_id: '#swagger-ui-embedded',
        url: 'https://api.codersrank.io/v2/swagger.yaml',
      });
    });
  }, []);
  return <div id="swagger-ui-embedded" />;
};
