* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f7f8fc;
    color: #1f2937;
    line-height: 1.6;
}


a {
    text-decoration: none;
    color: inherit;
}


.navbar {
    width: 100%;
    min-height: 70px;
    padding: 0 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-bottom: 1px solid #e5e7eb;
}


.logo {
    font-size: 1.5rem;
    font-weight: 800;
}


.logo span {
    color: #6366f1;
}


.nav-links {
    display: flex;
    gap: 30px;
}


.nav-links a {
    font-weight: 600;
}


.nav-links a:hover {
    color: #6366f1;
}


/* HERO */

.hero {
    min-height: 600px;
    display: flex;
    align-items: center;
    padding: 70px 8%;
    background:
        linear-gradient(
            135deg,
            #eef2ff,
            #ffffff
        );
}


.hero-content {
    max-width: 750px;
}


.tag {
    color: #6366f1;
    font-weight: 800;
    font-size: 0.85rem;
    letter-spacing: 1px;
    margin-bottom: 12px;
}


.hero h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    line-height: 1.05;
    margin-bottom: 25px;
}


.hero h1 span {
    color: #6366f1;
}


.hero p {
    font-size: 1.1rem;
    max-width: 650px;
    color: #64748b;
}


.hero-buttons {
    margin-top: 30px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}


/* BUTTONS */

.btn {
    display: inline-block;
    padding: 13px 25px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
}


.primary-btn {
    background: #6366f1;
    color: white;
}


.primary-btn:hover {
    background: #4f46e5;
}


.secondary-btn {
    background: white;
    border: 1px solid #d1d5db;
}


.secondary-btn:hover {
    background: #f1f5f9;
}


.full-btn {
    width: 100%;
    margin-top: 15px;
}


/* SECTIONS */

.section {
    padding: 90px 8%;
}


.section-title {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 50px;
}


.section-title h1,
.section-title h2 {
    font-size: 2.5rem;
    margin-bottom: 12px;
}


.section-title p:not(.tag) {
    color: #64748b;
}


/* FEATURES */

.features {
    display: grid;
    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}


.feature-card {
    background: white;
    padding: 35px;
    border-radius: 18px;
    border: 1px solid #e5e7eb;
}


.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
}


.feature-card h3 {
    margin-bottom: 10px;
}


.feature-card p {
    color: #64748b;
}


/* FEATURED EVENT */

.featured-section {
    padding: 90px 8%;
    background: #eef2ff;
}


.featured-card {
    max-width: 900px;
    margin: auto;
    background: white;
    padding: 45px;
    border-radius: 22px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
}


.event-category {
    display: inline-block;
    background: #e0e7ff;
    color: #4338ca;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
}


.featured-card h2 {
    font-size: 2.5rem;
    margin: 15px 0;
}


.featured-card p {
    color: #64748b;
}


.event-details {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 25px 0;
}


/* PAGE HEADER */

.page-header {
    text-align: center;
    padding: 80px 8% 50px;
    background: #eef2ff;
}


.page-header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}


.page-header p:not(.tag) {
    color: #64748b;
}


/* EVENTS */

.events-section {
    padding: 60px 8%;
}


.filters {
    display: flex;
    gap: 15px;
    margin-bottom: 40px;
}


.filters input,
.filters select,
#registrationSearch {
    padding: 14px;
    border: 1px solid #d1d5db;
    border-radius: 10px;
    background: white;
    font-size: 1rem;
}


.filters input {
    flex: 1;
}


.events-grid {
    display: grid;
    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}


.event-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    padding: 25px;
    transition: 0.2s;
}


.event-card:hover {
    transform: translateY(-5px);
    box-shadow:
        0 15px 30px rgba(0, 0, 0, 0.08);
}


.event-card h3 {
    margin: 15px 0 10px;
}


.event-card p {
    color: #64748b;
    margin-bottom: 15px;
}


.event-meta {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-bottom: 20px;
    font-size: 0.9rem;
}


/* FORM */

.form-section {
    padding: 70px 20px;
}


.form-container {
    max-width: 650px;
    margin: auto;
    background: white;
    padding: 40px;
    border-radius: 20px;
    border: 1px solid #e5e7eb;
}


.form-container .section-title {
    margin-bottom: 30px;
}


form {
    display: flex;
    flex-direction: column;
}


label {
    font-weight: 700;
    margin: 12px 0 6px;
}


input,
select,
textarea {
    width: 100%;
    padding: 13px;
    border: 1px solid #d1d5db;
    border-radius: 9px;
    font-size: 1rem;
    font-family: inherit;
}


textarea {
    min-height: 120px;
    resize: vertical;
}


input:focus,
select:focus,
textarea:focus {
    outline: 2px solid #c7d2fe;
    border-color: #6366f1;
}


.success-message {
    margin-top: 20px;
    text-align: center;
    color: #15803d;
    font-weight: 700;
}


/* ADMIN */

.admin-section {
    padding: 60px 8%;
    display: grid;
    gap: 30px;
}


.admin-card {
    background: white;
    padding: 30px;
    border-radius: 18px;
    border: 1px solid #e5e7eb;
}


.admin-card h2 {
    margin-bottom: 20px;
}


.admin-event {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #e5e7eb;
}


.admin-event:last-child {
    border-bottom: none;
}


.admin-actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}


.small-btn {
    padding: 8px 13px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-weight: 700;
}


.edit-btn {
    background: #fef3c7;
}


.delete-btn {
    background: #fee2e2;
}


.hidden {
    display: none;
}


/* TABLE */

.table-container {
    overflow-x: auto;
    margin-top: 20px;
}


table {
    width: 100%;
    border-collapse: collapse;
    min-width: 700px;
}


th,
td {
    padding: 12px;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
}


th {
    background: #f8fafc;
}


/* FOOTER */

footer {
    text-align: center;
    padding: 30px;
    background: #111827;
    color: white;
}


/* RESPONSIVE */

@media (max-width: 900px) {

    .features,
    .events-grid {
        grid-template-columns: repeat(2, 1fr);
    }

}


@media (max-width: 650px) {

    .navbar {
        padding: 15px 5%;
        flex-direction: column;
        gap: 15px;
    }


    .nav-links {
        gap: 15px;
    }


    .hero {
        padding: 60px 5%;
        min-height: 500px;
    }


    .section,
    .featured-section,
    .events-section,
    .admin-section {
        padding-left: 5%;
        padding-right: 5%;
    }


    .features,
    .events-grid {
        grid-template-columns: 1fr;
    }


    .filters {
        flex-direction: column;
    }


    .featured-card {
        padding: 25px;
    }


    .featured-card h2 {
        font-size: 2rem;
    }


    .form-container {
        padding: 25px;
    }


    .admin-event {
        flex-direction: column;
        align-items: flex-start;
    }

}