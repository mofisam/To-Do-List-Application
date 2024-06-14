import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About TaskManager</h1>
        <p>Organize your tasks efficiently and boost your productivity</p>
      </header>
      <section className="about-content">
        <h2>What is TaskManager?</h2>
        <p>
          TaskManager is a powerful and intuitive task management application designed to help individuals and teams
          organize their tasks and projects efficiently. With TaskManager, you can easily create, track, and manage your
          tasks, ensuring that nothing falls through the cracks.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Task Creation:</strong> Quickly create tasks with titles, descriptions, due dates, and priorities.
          </li>
          <li>
            <strong>Task Tracking:</strong> Monitor the progress of your tasks and update their statuses as you work on
            them.
          </li>
          <li>
            <strong>Project Management:</strong> Organize your tasks into projects for better organization and
            management.
          </li>
          <li>
            <strong>Reminders:</strong> Set reminders for important tasks to ensure you never miss a deadline.
          </li>
          <li>
            <strong>Collaboration:</strong> Share tasks with team members and collaborate seamlessly.
          </li>
          <li>
            <strong>Analytics:</strong> Gain insights into your productivity with detailed reports and analytics.
          </li>
        </ul>

        <h2>Why Choose TaskManager?</h2>
        <p>
          TaskManager is designed with the user in mind. Our goal is to provide a tool that is both powerful and easy to
          use. Whether you're an individual looking to keep track of personal tasks or a team working on complex
          projects, TaskManager has the features you need to stay organized and productive.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
