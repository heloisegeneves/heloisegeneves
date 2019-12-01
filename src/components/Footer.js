import React from 'react';
import _ from 'lodash';

import {htmlToReact, Link} from '../utils';
import Social from './Social';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer outer">
              <div className="inner">
                <div className="site-footer-inside">
                  <p className="site-info">
                    {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content'))}
                  </p>
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social') && 
                    <Social {...this.props} />
                  }
                </div>
              </div>
            </footer>
        );
    }
}
