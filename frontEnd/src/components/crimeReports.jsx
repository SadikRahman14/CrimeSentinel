import React from 'react';
import './CrimeReports.css';
import { useNavigate } from 'react-router-dom';

const CrimeReports = () => {
    const navigate = useNavigate();

    const allReports = [
        {   
            _id: "1",
            title: "Crime Report: Theft in Downtown",
            imageLink: "https://img.freepik.com/free-photo/closeup-view-brown-wooden-mallet-judge_93675-129068.jpg?t=st=1739167142~exp=1739170742~hmac=38646aa370fb15d2304bdcd2e5b5db78bb2bf0534e8ab0045775d317e108123f&w=996",
            body: "A recent case of theft was reported in the downtown area...",
            createdAt: new Date().toISOString(),
        },
        {
            _id: "2",
            title: "Crime Report: Theft in Downtown",
            imageLink: "https://img.freepik.com/free-photo/black-white-vehicles-yellow-caution-tape-near-car-parking-lot-daytime-crime-scene_146671-16659.jpg?t=st=1739167145~exp=1739170745~hmac=91219de86f12e757d5b9ab30f93b339cab7855a55c8c72a86659fcdf6c57d153&w=996",
            body: "A recent case of theft was reported in the downtown area...",
            createdAt: new Date().toISOString(),
        },
        {
            _id: "3",
            title: "Crime Report: Theft in Downtown",
            imageLink: "https://img.freepik.com/free-photo/closeup-view-brown-wooden-mallet-judge_93675-129068.jpg?t=st=1739167142~exp=1739170742~hmac=38646aa370fb15d2304bdcd2e5b5db78bb2bf0534e8ab0045775d317e108123f&w=996",
            body: "A recent case of theft was reported in the downtown area...",
            createdAt: new Date().toISOString(),
        },
        {
            _id: "4",
            title: "Crime Report: Theft in Downtown",
            imageLink: "https://media.istockphoto.com/id/1401717334/photo/shadow-of-the-hand-holding-a-knife-on-wall-background.jpg?s=612x612&w=0&k=20&c=C0TW8ib4D8MXsrWjdwAC5-AABHszXa6sTELnX385HH0=",
            body: "A recent case of theft was reported in the downtown area...",
            createdAt: new Date().toISOString(),
        },
        {
            _id: "5",
            title: "Crime Report: Theft in Downtown",
            imageLink: "https://media.istockphoto.com/id/1401717334/photo/shadow-of-the-hand-holding-a-knife-on-wall-background.jpg?s=612x612&w=0&k=20&c=C0TW8ib4D8MXsrWjdwAC5-AABHszXa6sTELnX385HH0=",
            body: "A recent case of theft was reported in the downtown area...",
            createdAt: new Date().toISOString(),
        },
        {
            _id: "6",
            title: "Police Investigating New Cybercrime",
            imageLink: "https://img.freepik.com/free-photo/black-white-vehicles-yellow-caution-tape-near-car-parking-lot-daytime-crime-scene_146671-16659.jpg?t=st=1739167145~exp=1739170745~hmac=91219de86f12e757d5b9ab30f93b339cab7855a55c8c72a86659fcdf6c57d153&w=996",
            body: "Cybercrime incidents are increasing, and the police...",
            createdAt: new Date().toISOString(),
        }
    ];

    return (
        <div className="crime-reports">
            <div className="pageTitle">
                CRIME REPORTS
            </div>

            <div className="crime-report-all-reports">
                {allReports.map(report => (
                    <div className="crime-report-card" key={report._id}>
                        <div className="crime-report-card-title">
                            <h2>{report.title}</h2>
                        </div>
                        <div className="crime-report-card-body">
                            <img src={report.imageLink} alt="Crime" className="crime-report-card-body-image" />
                            <p className="crime-report-card-body-text">{report.body}</p>
                        </div>
                        <button className="crime-report-readMoreButton" onClick={() => navigate(`/crimeReport/${report._id}`)}>
                            Read More &#8594;
                        </button>
                        <div className="crime-report-card-footer">
                            <p className="crime-report-card-footer-date">{new Date(report.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CrimeReports;
