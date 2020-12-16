import FormReport from '../FormReport/FormReport.js';
function PageContentLanding() {
    return (
        <div className="main-column">
          <h1>Report old house appliance</h1>
          <p>We recycle old house appliances. Let us know if you have one at home or spotted one dumped in public area.</p>
          <a href="">Learn more...</a>
          <p><strong>Fill in the form to report location of the scrap appliance.</strong></p>
          <FormReport />
        </div>
    );
}

export default PageContentLanding;