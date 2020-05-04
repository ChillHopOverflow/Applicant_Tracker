#### DBeaver Troubleshooting

1. Try creating a new mysql user with a password. [Process](https://stackoverflow.com/questions/50409788/mysql-8-create-new-user-with-password-not-working). Use that to create a new connection

2. Reset workspace. [process](https://dbeaver.com/docs/wiki/Reset-workspace/)

3. Try creating a database from the command line. `CREATE DATABASE db_name;` Specify that db_name when you try to create a new connection. 

4. Try reinstalling DBeaver'

5. Install a previous version. Maybe DBeaver 7.0.3

6. Follow [tutorial](https://www.youtube.com/watch?v=C9AGrSJ6ZB0)

#### Part 1: DB Creation

1. Start up MySQL server `mysql.server start`

2. Open DBeaver
- Hints: right click / cmd+s = save / use google and DBeaver's documenation

3. Create new MySQL 8+ database connection

4. Create new database w/ name `applicant_tracker_db`

5. Use UI of DBeaver to create tables following this [ERD](https://www.vertabelo.com/blog/designing-a-database-for-an-online-job-portal/seeker-profile-builder-subject-area.png).
- Hint: PK = Primary Key / FK = Foriegn Key (Link tables using these keys. All tables need a PK)
- Hint: Number = INT

6. Stop MySQL server `mysql.server stop`

7. Send me a copy of your ERD when finished. 
