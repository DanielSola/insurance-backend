DROP TABLE IF EXISTS request_history;

CREATE TABLE public.request_history
(
  id  SERIAL PRIMARY KEY,
  user_email varchar(32) NOT NULL,
  resource varchar(255) NOT NULL,
  request_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)
WITH (
    OIDS = FALSE
);

CREATE INDEX request_history_id_idx ON request_history (id);