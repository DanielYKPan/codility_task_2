/**
 * repo
 */

export interface Repo {
    uuid: string;
    name: string;
    created_on: string;
    links: {
        commits: {
            href: string;
        }
    };
    owner: {
        display_name: string;
        links: {
            avatar: {
                href: string;
            }
        }
    };
}
