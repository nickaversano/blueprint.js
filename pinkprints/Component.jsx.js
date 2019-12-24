exports.default = (argv) => `
/******************************************************************************\\
 * File: ${argv.filename}
 *
 * Author: ${argv.author}
 *
 * Description: ${argv.description}
 *
 * Notes: ${argv.notes}
\\*****************************************************************************/

// ------------------------------------------------------------------------------
// Node Modules -----------------------------------------------------------------
import React from 'react';
import classNames from 'classnames';
// ------------------------------------------------------------------------------
// Style ------------------------------------------------------------------------
import styles from './${argv.name}.scss';
//-------------------------------------------------------------------------------
// Components -------------------------------------------------------------------
//-------------------------------------------------------------------------------
// React Class ------------------------------------------------------------------
class ${argv.name} extends React.Component {
  render() {
    const { className } = this.props;

    const cn = classNames(styles.${argv.name}, className, {});

    return (
      <div className={cn}>
      </div>
    );
  }
};
//------------------------------------------------------------------------------
// Export ----------------------------------------------------------------------
export default ${argv.name};
`;
