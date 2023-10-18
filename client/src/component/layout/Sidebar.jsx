import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" to="/dashboard">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt" />
                </div>
                Dashboard
              </Link>

              <div className="sb-sidenav-menu-heading">Interface</div>

              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns" />
                </div>
                Theme Settings
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/add_logo">
                    Add Logo
                  </Link>
                  <Link className="nav-link" to="/manage_logo">
                    Manage Logo
                  </Link>
                  <Link className="nav-link" to="/add_top_banner">
                    Add Top Banner
                  </Link>
                  <Link className="nav-link" to="/manage_top_banner">
                    Manage Top Banner
                  </Link>
                </nav>
              </div>

              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSettings"
                aria-expanded="false"
                aria-controls="collapseSettings"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns" />
                </div>
                settings
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseSettings"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/add_user">
                    Add User
                  </Link>
                  <Link className="nav-link" to="/manage_user">
                    Manage User
                  </Link>
                </nav>
              </div>

              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAgentArea"
                aria-expanded="false"
                aria-controls="collapseAgentArea"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns" />
                </div>
                Agent Area
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseAgentArea"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/add_agent_information">
                    Add Agent Information
                  </Link>
                  <Link className="nav-link" to="/agent_information_list">
                    Agent Infromation List
                  </Link>
                  <Link className="nav-link" to="/send_agent_points">
                    Send Agents Points
                  </Link>
                
                  <Link className="nav-link" to="/agent_points_list">
                    Agent Points List
                  </Link>
                </nav>
              </div>

              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseAgentAreaReport"
                aria-expanded="false"
                aria-controls="collapseAgentAreaReport"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns" />
                </div>
                Agent Area Report
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseAgentAreaReport"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/agent_amount_report">
                    Agent Amount Report
                  </Link>
                  <Link
                    className="nav-link"
                    to="/agent_to_member_transfer_amount_report"
                  >
                    Agent To Member Trnasfer Amount Report
                  </Link>
                  <Link className="nav-link" to="/member_to_agnet_trnasfer_amount">
                    Member To Agent Transfer Amount Report
                  </Link>
                  <Link className="nav-link" to="/agent_withdraw_amount_report">
                    Agent Withdraw Amount Report
                  </Link>
                </nav>
              </div>

              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSoftwareArea"
                aria-expanded="false"
                aria-controls="collapseSoftwareArea"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns" />
                </div>
                Software Area
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseSoftwareArea"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/pin_infromation">
                    PIN Information
                  </Link>
                  <Link className="nav-link" to="/pin_infromtion_list">
                    PIN Information List
                  </Link>
                </nav>
              </div>

              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSoftwareReport"
                aria-expanded="false"
                aria-controls="collapseSoftwareReport"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns" />
                </div>
                Software Report
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseSoftwareReport"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/member_label_information">
                    Member Label Information
                  </Link>
                  <Link className="nav-link" to="/member_information">
                    Member Information
                  </Link>
                  <Link className="nav-link" to="/member_referral">
                    Member Referral, Rank & Amount Information
                  </Link>
                  <Link className="nav-link" to="/withdraw_rank_information">
                    Withdraw Rank Information
                  </Link>
                  <Link className="nav-link" to="/withdraw_referral">
                    Withdraw Referral Comission Information
                  </Link>
                </nav>
              </div>

              <Link className="nav-link" to="/rewards">
                Rewards
              </Link>

              {/* <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapseSoftwareReport"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-book-open" />
                </div>
                Pages
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down" />
                </div>
              </a>
              <div
                className="collapse"
                id="collapseSoftwareReport"
                aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion"
              >
                <nav
                  className="sb-sidenav-menu-nested nav accordion"
                  id="sidenavAccordionPages"
                >
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseAuth"
                    aria-expanded="false"
                    aria-controls="pagesCollapseAuth"
                  >
                    Authentication
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down" />
                    </div>
                  </a>
                  <div
                    className="collapse"
                    id="pagesCollapseAuth"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="login.html">
                        Login
                      </a>
                      <a className="nav-link" href="register.html">
                        Register
                      </a>
                      <a className="nav-link" href="password.html">
                        Forgot Password
                      </a>
                    </nav>
                  </div>
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseError"
                    aria-expanded="false"
                    aria-controls="pagesCollapseError"
                  >
                    Error
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down" />
                    </div>
                  </a>
                  <div
                    className="collapse"
                    id="pagesCollapseError"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages"
                  >
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="401.html">
                        401 Page
                      </a>
                      <a className="nav-link" href="404.html">
                        404 Page
                      </a>
                      <a className="nav-link" href="500.html">
                        500 Page
                      </a>
                    </nav>
                  </div>
                </nav>
              </div>

              <div className="sb-sidenav-menu-heading">Addons</div>
              <a className="nav-link" href="charts.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-chart-area" />
                </div>
                Charts
              </a>
              <a className="nav-link" href="tables.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-table" />
                </div>
                Tables
              </a> */}


            </div>
          </div>
          {/* <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
          </div> */}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
