

export const CodeExample = {
  "state_sup.py": `
from qiskit import QuantumCircuit, Aer, transpile
from qiskit.visualization import plot_histogram

# Create a quantum circuit with one qubit and one classical bit
qc = QuantumCircuit(1, 1)

# Apply a Hadamard gate to put the qubit in superposition
qc.h(0)

# Measure the qubit and store the result in the classical bit
qc.measure(0, 0)

# Simulate the circuit
simulator = Aer.get_backend('aer_simulator')
job = simulator.run(transpile(qc, simulator), shots=1024) # Run 1024 times
result = job.result()

# Get the measurement counts
counts = result.get_counts(qc)
print("Measurement counts:", counts)

# Optionally, visualize the results as a histogram
# plot_histogram(counts) `,

"bell_state.py":`from qiskit import QuantumCircuit, Aer, transpile
from qiskit.visualization import plot_histogram

# Create a quantum circuit with two qubits and two classical bits
qc = QuantumCircuit(2, 2)

# Apply a Hadamard gate to the first qubit for superposition
qc.h(0)

# Apply a CNOT (Controlled-NOT) gate with qubit 0 as control and qubit 1 as target
qc.cx(0, 1)

# Measure both qubits
qc.measure([0, 1], [0, 1])

# Simulate the circuit
simulator = Aer.get_backend('aer_simulator')
job = simulator.run(transpile(qc, simulator), shots=1024) # Run 1024 times
result = job.result()

# Get the measurement counts
counts = result.get_counts(qc)
print("Measurement counts:", counts)

# Optionally, visualize the results as a histogram
# plot_histogram(counts)`
};



export const floatingCards = {
    "state_sup.py" : {
        bgColor : "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor : "text-blue-300",
        icon : "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestion in real-time",
    },
    "bell_state.py" : {
        bgColor : "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor : "text-purple-300",
        icon : "🔎 ",
        title: "Smart Search",
        content: "Intelligent code search across your project",
    },
};