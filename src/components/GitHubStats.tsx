import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, Activity } from 'lucide-react';

interface GitHubData {
    public_repos: number;
    followers: number;
    following: number;
    avatar_url: string;
    bio: string;
}

interface RepoData {
    name: string;
    stargazers_count: number;
    language: string;
    html_url: string;
}

export default function GitHubStats() {
    const [data, setData] = useState<GitHubData | null>(null);
    const [repos, setRepos] = useState<RepoData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const username = 'vanshitahujaa';

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                // Fetch user data
                const userRes = await fetch(`https://api.github.com/users/${username}`);
                if (!userRes.ok) throw new Error('Failed to fetch user data');
                const userData = await userRes.json();

                // Fetch repos
                const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
                if (!reposRes.ok) throw new Error('Failed to fetch repos');
                const reposData = await reposRes.json();

                setData(userData);
                setRepos(reposData);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, []);

    const languageColors: Record<string, string> = {
        TypeScript: '#3178c6',
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Java: '#b07219',
        Go: '#00ADD8',
        Rust: '#dea584',
    };

    if (loading) {
        return (
            <div className="glass-card p-8 flex items-center justify-center min-h-[200px]">
                <div className="flex items-center gap-3 text-white/50">
                    <Activity className="w-5 h-5 animate-pulse" />
                    <span>Loading GitHub stats...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="glass-card p-8 text-center text-white/50">
                <p>Unable to load GitHub stats</p>
            </div>
        );
    }

    return (
        <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <GitBranch className="w-6 h-6 text-[#00d9ff]" />
                    GitHub Activity
                </h3>
                <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 hover:text-[#00d9ff] transition-colors magnetic"
                >
                    @{username}
                </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <motion.div
                    className="text-center p-4 rounded-xl bg-white/5"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="text-3xl font-bold text-white">{data?.public_repos || 0}</div>
                    <div className="text-white/50 text-sm">Repos</div>
                </motion.div>
                <motion.div
                    className="text-center p-4 rounded-xl bg-white/5"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="text-3xl font-bold text-white">40+</div>
                    <div className="text-white/50 text-sm">Projects</div>
                </motion.div>
                <motion.div
                    className="text-center p-4 rounded-xl bg-white/5"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="text-3xl font-bold text-white">
                        {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
                    </div>
                    <div className="text-white/50 text-sm flex items-center justify-center gap-1">
                        <Star className="w-3 h-3" /> Stars
                    </div>
                </motion.div>
            </div>

            {/* Recent Repos */}
            <div className="space-y-3">
                <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider">Recent Repos</h4>
                <div className="grid gap-2">
                    {repos.slice(0, 4).map((repo, i) => (
                        <motion.a
                            key={repo.name}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group magnetic"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ x: 4 }}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: languageColors[repo.language] || '#6e7681' }}
                                />
                                <span className="text-white group-hover:text-[#00d9ff] transition-colors font-mono text-sm">
                                    {repo.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-white/40 text-xs">
                                {repo.stargazers_count > 0 && (
                                    <span className="flex items-center gap-1">
                                        <Star className="w-3 h-3" /> {repo.stargazers_count}
                                    </span>
                                )}
                                <span>{repo.language}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
