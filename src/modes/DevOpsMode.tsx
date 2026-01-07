import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle, Server, GitBranch, Database, Cloud, Gauge, Terminal } from 'lucide-react';
import ProjectCard, { PROJECTS } from '../components/ProjectCard';
import Floating3D from '../components/Floating3D';

type ServiceStatus = 'running' | 'degraded' | 'recovering';

export default function DevOpsMode() {
  const [serviceStatus, setServiceStatus] = useState<ServiceStatus>('running');
  const [uptime, setUptime] = useState('99.98%');
  const [responseTime, setResponseTime] = useState(45);
  const [logs, setLogs] = useState<string[]>([
    '[INFO] Service health check passed',
    '[INFO] All systems operational',
    '[INFO] Container metrics collected'
  ]);

  useEffect(() => {
    if (serviceStatus === 'recovering') {
      const timer = setTimeout(() => {
        setServiceStatus('running');
        setUptime('99.98%');
        setResponseTime(45);
        setLogs(prev => [
          ...prev,
          '[INFO] Recovery complete',
          '[INFO] Service stabilized',
          '[INFO] Health checks passing'
        ]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [serviceStatus]);

  const handleInjectFailure = () => {
    setServiceStatus('degraded');
    setUptime('94.12%');
    setResponseTime(2340);
    setLogs(prev => [
      ...prev,
      '[ERROR] Failure injected: container crash',
      '[WARN] Service degraded',
      '[INFO] Initiating auto-recovery...'
    ]);

    setTimeout(() => {
      setServiceStatus('recovering');
      setLogs(prev => [
        ...prev,
        '[INFO] Container restart initiated',
        '[INFO] Health checks starting...'
      ]);
    }, 1500);
  };

  const handleViewMetrics = () => {
    setLogs(prev => [
      ...prev,
      '[METRICS] MTTR: 2.3s',
      '[METRICS] Success rate: 99.98%',
      '[METRICS] Avg response time: 45ms',
      '[METRICS] Active connections: 1,247'
    ]);
  };

  const getStatusColor = () => {
    switch (serviceStatus) {
      case 'running': return '#22c55e';
      case 'degraded': return '#ef4444';
      case 'recovering': return '#f59e0b';
    }
  };

  const getStatusIcon = () => {
    switch (serviceStatus) {
      case 'running': return <CheckCircle className="w-5 h-5" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5" />;
      case 'recovering': return <Activity className="w-5 h-5 animate-pulse" />;
    }
  };

  const pipelineSteps = [
    { name: 'Code', icon: Terminal, status: 'complete' },
    { name: 'Build', icon: GitBranch, status: 'complete' },
    { name: 'Test', icon: CheckCircle, status: 'complete' },
    { name: 'Image', icon: Database, status: 'complete' },
    { name: 'Deploy', icon: Cloud, status: 'complete' },
  ];

  const metrics = [
    { label: 'Uptime', value: uptime, color: '#22c55e' },
    { label: 'Response Time', value: `${responseTime}ms`, color: responseTime > 100 ? '#f59e0b' : '#00d9ff' },
    { label: 'Error Rate', value: '0.02%', color: '#22c55e' },
    { label: 'Requests/s', value: '1,247', color: '#8b5cf6' },
  ];

  return (
    <div className="min-h-screen bg-mesh relative overflow-hidden">
      {/* 3D Decorations */}
      <Floating3D
        shape="torus"
        color1="#22c55e"
        color2="#00d9ff"
        style={{ top: '5%', right: '5%', width: '200px', height: '200px' }}
      />
      <Floating3D
        shape="sphere"
        color1="#8b5cf6"
        color2="#22c55e"
        style={{ bottom: '20%', left: '3%', width: '180px', height: '180px' }}
      />

      <div className="container relative z-10 py-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#22c55e] text-sm font-medium mb-6"
          >
            <Server className="inline w-4 h-4 mr-2" />
            DevOps Mode
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Infrastructure &{' '}
            <span className="bg-gradient-to-r from-[#22c55e] to-[#00d9ff] bg-clip-text text-transparent">
              Reliability
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            CI/CD pipelines, container orchestration, and production monitoring
          </motion.p>
        </motion.section>

        {/* CI/CD Pipeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">CI/CD Pipeline</h2>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
              {pipelineSteps.map((step, idx) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center flex-shrink-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-xl bg-[#22c55e]/10 border-2 border-[#22c55e] flex items-center justify-center mb-2">
                      <step.icon className="w-6 h-6 text-[#22c55e]" />
                    </div>
                    <span className="text-white font-mono text-sm">{step.name}</span>
                  </div>
                  {idx < pipelineSteps.length - 1 && (
                    <div className="w-12 md:w-20 h-0.5 bg-gradient-to-r from-[#22c55e] to-[#22c55e]/50 mx-2" />
                  )}
                </motion.div>
              ))}
            </div>
            <p className="text-white/50 mt-6 text-sm font-mono border-t border-white/10 pt-4">
              Automated release flow: commit → build → test → containerize → deploy
            </p>
          </div>
        </motion.section>

        {/* Live Metrics + Service Panel */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* Metrics */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Live Metrics</h2>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-4 h-4 text-white/50" />
                    <span className="text-white/50 text-sm">{metric.label}</span>
                  </div>
                  <div
                    className="text-3xl font-bold font-mono"
                    style={{ color: metric.color }}
                  >
                    {metric.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Service Panel */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Service Panel</h2>

            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-white/50 text-sm mb-1">SERVICE</div>
                  <div className="text-white text-lg font-semibold">faultline-core</div>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: `${getStatusColor()}15`,
                    border: `1px solid ${getStatusColor()}40`,
                    color: getStatusColor()
                  }}
                >
                  {getStatusIcon()}
                  <span className="font-medium capitalize">{serviceStatus}</span>
                </div>
              </div>

              {/* Logs */}
              <div className="bg-[#0a0a0f] rounded-lg p-4 h-40 overflow-y-auto font-mono text-sm mb-4">
                {logs.slice(-8).map((log, idx) => (
                  <div
                    key={idx}
                    className={`mb-1 ${log.includes('ERROR')
                        ? 'text-[#ef4444]'
                        : log.includes('WARN')
                          ? 'text-[#f59e0b]'
                          : log.includes('METRICS')
                            ? 'text-[#00d9ff]'
                            : 'text-white/60'
                      }`}
                  >
                    {log}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleInjectFailure}
                  disabled={serviceStatus !== 'running'}
                  className="flex-1 px-4 py-3 rounded-lg bg-[#ef4444] hover:bg-[#dc2626] disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed text-white font-medium transition-all"
                >
                  Inject Failure
                </button>
                <button
                  onClick={handleViewMetrics}
                  className="flex-1 px-4 py-3 rounded-lg bg-[#00d9ff] hover:bg-[#0ea5e9] text-[#0a0a0f] font-medium transition-all"
                >
                  View Metrics
                </button>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Infrastructure Projects */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Infrastructure Projects</h2>
          <p className="text-white/50 mb-8">Systems built with DevOps best practices</p>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
